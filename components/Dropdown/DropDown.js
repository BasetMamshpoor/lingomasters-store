import React, { useEffect, useRef, useState } from "react"; import style from "./Dropdown.module.css";
import useSwipeScroll from "hooks/useHorizontalScroll";

import Check from '@icons/check.svg';
import Close from '@icons/close.svg';
import Down from '@icons/arrow-down.svg';

const Dropdown = ({
    name,
    label,
    styles,
    className,
    array,
    Multiple,
    setState,
    Searchable,
    defaultValue,
    placeHolder = "انتخاب ...",
    disabled = false,
    required = false,
}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(Multiple ? [] : null);
    const [searchValue, setSearchValue] = useState("");
    const scrollRef = useSwipeScroll();
    const searchRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        setSearchValue("");
        if (showMenu && searchRef.current) searchRef.current.focus();
    }, [showMenu]);

    useEffect(() => {
        if (defaultValue) {
            if (Multiple) setSelectedValue(filterByReference(array, defaultValue))
            else setSelectedValue(array.find(el => el.value == defaultValue) || null)
        } else if (required && array.length > 0) {
            if (Multiple) {
                const initialValue = [array[0]];
                setSelectedValue(initialValue);
                setState(name, initialValue);
            } else {
                const initialValue = array[0];
                setSelectedValue(initialValue);
                setState(name, initialValue.value, initialValue.name);
            }
        } else setSelectedValue(Multiple ? [] : null)
        window.addEventListener("click", handler);
        return () => window.removeEventListener("click", handler);
    }, [defaultValue, required, array]);

    useEffect(() => {
        if (Multiple) {
            if (!defaultValue && !filterByReference(array, selectedValue).length && !required) setSelectedValue([])
        } else if (!defaultValue && !array.find(i => i.value == selectedValue?.value) && !required) setSelectedValue(null)
    }, [array])

    const filterByReference = (arr1, arr2) => {
        return arr1.filter(el =>
            arr2.find(element => element.value == el.value)
        );
    };

    const handler = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            setShowMenu(false);
        }
    };
    const handleInputClick = () => {
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0) return placeHolder;

        if (Multiple) {
            return (
                <div className={style.dropdown_tags}>
                    {selectedValue.map((option) => (
                        <div key={option.value} className={style.dropdown_tag_item}>
                            {option.name}
                            <span
                                onClick={(e) => onTagRemove(e, option)}
                                className={style.dropdown_tag_close}
                            >
                                <Close />
                            </span>
                        </div>
                    ))}
                </div>
            );
        }
        return selectedValue.name;
    };

    const removeOption = (option) => {
        return selectedValue.filter((o) => o.value !== option.value);
    };

    const onTagRemove = (e, option) => {
        e.stopPropagation();
        const newValue = removeOption(option);
        setSelectedValue(newValue);
        setState(name, newValue);
    };

    const onItemClick = (option, name) => {
        let newValue;
        if (Multiple) {
            if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
                newValue = removeOption(option);
            } else {
                newValue = [...selectedValue, option];
            }
            if (newValue.length === 0 && required) {
                newValue = [option];
            }
        } else {
            newValue = selectedValue !== null && option.value === selectedValue.value ? null : option;
            if (newValue === null && required) newValue = option;
        }
        setSelectedValue(newValue);
        const isArray = Array.isArray(newValue)
        setState(name, isArray ? newValue : newValue?.value, !isArray ? newValue?.name : undefined);
    };

    const isSelected = (option) => {
        if (Multiple) return selectedValue.some((o) => o.value === option.value);
        return selectedValue?.value === option.value;
    };

    const onSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const getOptions = () => {
        if (!searchValue) {
            return array;
        }

        return array.filter(option =>
            Object.values(option).some(val =>
                String(val).toLowerCase().includes(searchValue.toLowerCase())
            )
        );
    };

    return (
        <div className={disabled ? style.disabledDropdown : style.dropdown_container} style={styles ? styles : null}>
            {label && <label className='mb-2 mr-2 font-semibold'>{label}</label>}
            <div className='relative'>
                <section ref={inputRef} onClick={handleInputClick} className={`${style.dropdown_input} ${className || ' '}`}>
                    <div className={style.dropdown_selected_value} ref={scrollRef}>{getDisplay()}</div>
                    <div className={style.dropdown_tools} style={showMenu ? { transform: 'rotate(180deg)' } : null}>
                        <Down />
                    </div>
                </section>
                {showMenu && (
                    <div className={style.dropdown_menu}>
                        {Searchable && (
                            <div className={style.search_box}>
                                <input onChange={onSearch} value={searchValue} ref={searchRef} onClick={e => e.stopPropagation()} />
                            </div>
                        )}
                        <ul className={style.dropdown_item_group} dir="auto">
                            {getOptions().map((option) => (
                                <li
                                    onClick={() => onItemClick(option, name)}
                                    key={option.value}
                                    className={style.dropdown_item}
                                >
                                    <label className={style.gqIo}>
                                        <input type="checkbox" hidden defaultChecked={isSelected(option) ? true : false} />
                                        <div className={style.Mdsp}>
                                            <span className='line-clamp-1'>{option.name}</span>
                                            <span className={style.gbPol}><Check /></span>
                                        </div>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default React.memo(Dropdown);