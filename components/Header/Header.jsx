const Header = () => {
    return (
        <>
            <header className="w-full bg-white sticky top-0">
                <div className="container py-6">
                    <div className="header-top-part w-100">
                        <div className="header-top-right-part w-100">
                            <div className="dropdown">
                                <button className="dropdown-toggle" data-bs-toggle="dropdown">
                                    <img
                                        src="Simi-Flags/Country=Zambia, Style=Square, Radius=Off.svg"
                                        alt=""
                                        className="H-dropdown-toggle"
                                    />
                                </button>
                                <ul className="dropdown-menu">
                                    <li
                                        className="dropdown-item active d-flex align-items-center justify-content-between"
                                    >
                                        <div className="d-flex align-items-center header-di-label">
                                            <img
                                                src="Simi-Flags/Country=Syrian Arab Republic, Style=Flag, Radius=Off.svg"
                                                alt="Flag"
                                            />
                                            <label for="persian-lang-choose"> فارسی </label>
                                        </div>
                                        <input
                                            type="radio"
                                            id="persian-lang-choose"
                                            name="lang-choose"
                                            checked
                                        />
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect width="16" height="16" rx="8" fill="currentColor" />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12.2534 4.72357C12.4061 4.86352 12.4164 5.10073 12.2764 5.2534L6.77643 11.2534C6.70732 11.3288 6.6104 11.3727 6.50815 11.3749C6.40589 11.3771 6.30716 11.3375 6.23483 11.2652L3.73483 8.76517C3.58839 8.61872 3.58839 8.38128 3.73483 8.23484C3.88128 8.08839 4.11872 8.08839 4.26517 8.23484L6.48822 10.4579L11.7236 4.74661C11.8635 4.59394 12.1007 4.58362 12.2534 4.72357Z"
                                                fill="white"
                                                stroke="white"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </li>
                                    <li
                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                    >
                                        <div className="d-flex align-items-center header-di-label">
                                            <img
                                                src="Simi-Flags/Country=Turkey, Style=Flag, Radius=Off.svg"
                                                alt="Flag"
                                            />
                                            <label for="turkish-lang-choose"> ترکی </label>
                                        </div>
                                        <input
                                            type="radio"
                                            id="turkish-lang-choose"
                                            name="lang-choose"
                                        />
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect width="16" height="16" rx="8" fill="currentColor" />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12.2534 4.72357C12.4061 4.86352 12.4164 5.10073 12.2764 5.2534L6.77643 11.2534C6.70732 11.3288 6.6104 11.3727 6.50815 11.3749C6.40589 11.3771 6.30716 11.3375 6.23483 11.2652L3.73483 8.76517C3.58839 8.61872 3.58839 8.38128 3.73483 8.23484C3.88128 8.08839 4.11872 8.08839 4.26517 8.23484L6.48822 10.4579L11.7236 4.74661C11.8635 4.59394 12.1007 4.58362 12.2534 4.72357Z"
                                                fill="white"
                                                stroke="white"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </li>
                                    <li
                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                    >
                                        <div className="d-flex align-items-center header-di-label">
                                            <img
                                                src="Simi-Flags/Country=Spain, Style=Flag, Radius=Off.svg"
                                                alt="Flag"
                                            />
                                            <label for="english-lang-choose"> انگلیسی </label>
                                        </div>
                                        <input
                                            type="radio"
                                            id="english-lang-choose"
                                            name="lang-choose"
                                        />
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect width="16" height="16" rx="8" fill="currentColor" />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12.2534 4.72357C12.4061 4.86352 12.4164 5.10073 12.2764 5.2534L6.77643 11.2534C6.70732 11.3288 6.6104 11.3727 6.50815 11.3749C6.40589 11.3771 6.30716 11.3375 6.23483 11.2652L3.73483 8.76517C3.58839 8.61872 3.58839 8.38128 3.73483 8.23484C3.88128 8.08839 4.11872 8.08839 4.26517 8.23484L6.48822 10.4579L11.7236 4.74661C11.8635 4.59394 12.1007 4.58362 12.2534 4.72357Z"
                                                fill="white"
                                                stroke="white"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </li>
                                    <li
                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                    >
                                        <div className="d-flex align-items-center header-di-label">
                                            <img
                                                src="Simi-Flags/Country=Ukraine, Style=Flag, Radius=Off.svg"
                                                alt="Flag"
                                            />
                                            <label for="korean-lang-choose"> کره ای </label>
                                        </div>
                                        <input
                                            type="radio"
                                            id="korean-lang-choose"
                                            name="lang-choose"
                                        />
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect width="16" height="16" rx="8" fill="currentColor" />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12.2534 4.72357C12.4061 4.86352 12.4164 5.10073 12.2764 5.2534L6.77643 11.2534C6.70732 11.3288 6.6104 11.3727 6.50815 11.3749C6.40589 11.3771 6.30716 11.3375 6.23483 11.2652L3.73483 8.76517C3.58839 8.61872 3.58839 8.38128 3.73483 8.23484C3.88128 8.08839 4.11872 8.08839 4.26517 8.23484L6.48822 10.4579L11.7236 4.74661C11.8635 4.59394 12.1007 4.58362 12.2534 4.72357Z"
                                                fill="white"
                                                stroke="white"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </li>
                                    <li
                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                    >
                                        <div className="d-flex align-items-center header-di-label">
                                            <img
                                                src="Simi-Flags/Country=Thailand, Style=Flag, Radius=Off.svg"
                                                alt="Flag"
                                            />
                                            <label for="chines-lang-choose"> چینی </label>
                                        </div>
                                        <input
                                            type="radio"
                                            id="chines-lang-choose"
                                            name="lang-choose"
                                        />
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect width="16" height="16" rx="8" fill="currentColor" />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12.2534 4.72357C12.4061 4.86352 12.4164 5.10073 12.2764 5.2534L6.77643 11.2534C6.70732 11.3288 6.6104 11.3727 6.50815 11.3749C6.40589 11.3771 6.30716 11.3375 6.23483 11.2652L3.73483 8.76517C3.58839 8.61872 3.58839 8.38128 3.73483 8.23484C3.88128 8.08839 4.11872 8.08839 4.26517 8.23484L6.48822 10.4579L11.7236 4.74661C11.8635 4.59394 12.1007 4.58362 12.2534 4.72357Z"
                                                fill="white"
                                                stroke="white"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </li>
                                    <li
                                        className="dropdown-item d-flex align-items-center justify-content-between"
                                    >
                                        <div className="d-flex align-items-center header-di-label">
                                            <img
                                                src="Simi-Flags/Country=Syrian Arab Republic, Style=Flag, Radius=Off.svg"
                                                alt="Flag"
                                            />
                                            <label for="arabic-lang-choose"> عربی </label>
                                        </div>
                                        <input
                                            type="radio"
                                            id="arabic-lang-choose"
                                            name="lang-choose"
                                        />
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect width="16" height="16" rx="8" fill="currentColor" />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12.2534 4.72357C12.4061 4.86352 12.4164 5.10073 12.2764 5.2534L6.77643 11.2534C6.70732 11.3288 6.6104 11.3727 6.50815 11.3749C6.40589 11.3771 6.30716 11.3375 6.23483 11.2652L3.73483 8.76517C3.58839 8.61872 3.58839 8.38128 3.73483 8.23484C3.88128 8.08839 4.11872 8.08839 4.26517 8.23484L6.48822 10.4579L11.7236 4.74661C11.8635 4.59394 12.1007 4.58362 12.2534 4.72357Z"
                                                fill="white"
                                                stroke="white"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <div className="header-top-right-part-menu position-relative">
                                <button
                                    className="toggle-sallam"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#body-offcanvas"
                                    id="header-top-right-part-menu-btn"
                                >
                                    <svg
                                        width="25"
                                        id="icon1"
                                        height="26"
                                        viewBox="0 0 25 26"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="0.5"
                                            y="1"
                                            width="24"
                                            height="24"
                                            rx="3.5"
                                            stroke="#366CDA"
                                        />
                                        <path
                                            d="M8 9H17"
                                            stroke="#366CDA"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M6.5 13H18.5"
                                            stroke="#366CDA"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M9.5 17H15.5"
                                            stroke="#366CDA"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <svg
                                        width="25"
                                        height="26"
                                        id="icon2"
                                        viewBox="0 0 25 26"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="0.5"
                                            y="1"
                                            width="24"
                                            height="24"
                                            rx="3.5"
                                            stroke="#366CDA"
                                        />
                                        <path
                                            d="M8 17.5L17 8.5"
                                            stroke="#366CDA"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M17 17.5L8.00001 8.5"
                                            stroke="#366CDA"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="header-top-middle-part w-100">
                            <h1>LINGOMASTERS</h1>
                            <img src="" alt="" />
                        </div>
                        <div className="header-top-left-part w-100">
                            <div className="dropdown" id="left-first-dropdown-container">
                                <a
                                    href="#"
                                    className="dropdown-toggle"
                                    id="left-first-dropdown"
                                    data-bs-toggle="dropdown"
                                >
                                    <img
                                        src="Simi-Flags/Country=United States of America, Style=Flag, Radius=Off.svg"
                                        alt=""
                                        className="H-dropdown-toggle"
                                    />
                                </a>
                            </div>
                            <a
                                href="#"
                                className="xxx-prmry-btn page-btn hidden"
                                id="panel-enter"
                            >
                                ورود به پنل
                            </a>
                            <div
                                className="dropdown hidden"
                                id="main-second-dropdown-container"
                            >
                                <button className="dropdown-toggle" data-bs-toggle="dropdown">
                                    <img src="IMAGES/Minion.png" alt="" />
                                </button>
                            </div>
                            <a
                                href="#"
                                className="lg-solid-default-primary-button paragraph-medium FW-regular"
                                id="enter-btn"
                            >
                                ورود
                            </a>
                            <a
                                href="#"
                                className="lg-solid-default-primary-button paragraph-medium FW-regular"
                                id="student-btn"
                            >
                                ورود زبان آموز
                            </a>
                            <a
                                href="#"
                                className="lg-linear-default-secondary-button paragraph-medium FW-regular"
                                id="teacher-btn"
                            >
                                ورود استاد
                            </a>
                        </div>
                    </div>
                    <div className="header-middle-part w-100 padding-16-80 d-flex align-items-center justify-content-center">
                        <form
                            className="header-middle-part-search-box-container w-100 d-flex align-items-center justify-content-center"
                        >
                            <button type="submit">
                                <svg
                                    width="46"
                                    height="46"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="m21.407 19.753-4.41-4.41a8.148 8.148 0 0 0 1.633-4.903c0-4.516-3.674-8.19-8.19-8.19s-8.19 3.674-8.19 8.19 3.674 8.19 8.19 8.19a8.148 8.148 0 0 0 4.902-1.633l4.41 4.41a1.171 1.171 0 0 0 1.655-1.654ZM4.59 10.44a5.85 5.85 0 1 1 5.85 5.85 5.857 5.857 0 0 1-5.85-5.85Z"
                                    ></path>
                                </svg>
                            </button>
                            <input
                                type="search"
                                oninput="search"
                                placeholder="جستجوی استاد  دوره آموزشی و ..."
                            />
                        </form>
                    </div>
                    <div className="header-bottom-part w-100 d-flex align-items-center justify-content-center">
                        <nav
                            className="header-bottom-part-navgation w-100 d-flex align-items-center justify-content-between"
                        >
                            <a
                                href="#"
                                className="header-bottom-part-navgation-item d-flex align-items-center"
                            >
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M13.2945 1.38518C11.9172 0.421087 10.0841 0.421084 8.70681 1.38518L1.82923 6.19948C0.670613 7.01052 0.0263913 8.37309 0.134861 9.7832L0.83988 18.9484C0.972847 20.677 2.53905 21.9334 4.25531 21.6882L7.42492 21.2354C8.90287 21.0243 10.0007 19.7585 10.0007 18.2656V17.0001C10.0007 16.4479 10.4484 16.0001 11.0007 16.0001C11.5529 16.0001 12.0007 16.4479 12.0007 17.0001V18.2656C12.0007 19.7585 13.0984 21.0243 14.5764 21.2354L17.746 21.6882C19.4623 21.9334 21.0285 20.677 21.1614 18.9484L21.8665 9.7832C21.9749 8.37309 21.3307 7.01052 20.1721 6.19949L13.2945 1.38518ZM9.85373 3.02364C10.5424 2.5416 11.4589 2.5416 12.1476 3.02365L19.0252 7.83795C19.6045 8.24347 19.9266 8.92475 19.8723 9.62981L19.1673 18.795C19.123 19.3712 18.6009 19.79 18.0289 19.7083L14.8592 19.2555C14.3666 19.1851 14.0007 18.7632 14.0007 18.2656V17.0001C14.0007 15.3433 12.6575 14.0001 11.0007 14.0001C9.3438 14.0001 8.00066 15.3433 8.00066 17.0001V18.2656C8.00066 18.7632 7.63473 19.1851 7.14208 19.2555L3.97246 19.7083C3.40038 19.79 2.87831 19.3712 2.83399 18.795L2.12897 9.62981C2.07474 8.92475 2.39685 8.24347 2.97616 7.83795L9.85373 3.02364Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <span> صفحه اصلی </span>
                            </a>
                            <a
                                href="#"
                                className="header-bottom-part-navgation-item d-flex align-items-center"
                            >
                                <svg
                                    width="22"
                                    height="20"
                                    viewBox="0 0 22 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M11.1117 -0.00195312L4.86478 0.388476C3.37706 0.481459 2.06445 1.39398 1.45905 2.75613L0.913143 3.98443C0.324305 5.30931 0.498482 6.84911 1.36839 8.00898L1.62668 8.35337L1.98251 16.1816C2.07962 18.3179 3.83987 20 5.97838 20H16.2449C18.3834 20 20.1437 18.3179 20.2408 16.1816L20.5901 8.49655C21.5415 7.60721 21.892 6.21988 21.4354 4.96402L20.7229 3.00463C20.1792 1.50945 18.8011 0.478635 17.2132 0.379393L11.1117 -0.00195312ZM3.98045 16.0908L3.67762 9.42869C4.53422 9.52959 5.41836 9.33071 6.16635 8.83205L6.27021 8.76281C6.83496 8.38631 7.55815 8.34128 8.16524 8.64483L9.3228 9.22361C10.4489 9.78666 11.7744 9.78666 12.9005 9.22361L14.0581 8.64483C14.6651 8.34128 15.3883 8.38631 15.9531 8.76281L16.057 8.83205C16.8049 9.33071 17.6891 9.52959 18.5457 9.42869L18.2429 16.0908C18.1943 17.159 17.3142 18 16.2449 18H14.1985L14.4006 15.5744C14.5609 13.6503 13.0425 12 11.1117 12C9.18082 12 7.66237 13.6503 7.82272 15.5744L8.02485 18H5.97838C4.90913 18 4.029 17.159 3.98045 16.0908ZM17.1664 7.16795C17.7388 7.54957 18.4845 7.54957 19.0569 7.16795C19.5538 6.8367 19.7598 6.20871 19.5558 5.6475L18.8433 3.68812C18.5714 2.94053 17.8824 2.42512 17.0884 2.3755L11.1117 2.00195L4.98954 2.38458C4.24568 2.43107 3.58938 2.88733 3.28667 3.56841L2.74077 4.7967C2.44635 5.45915 2.53344 6.22904 2.96839 6.80898L3.29667 7.24669C3.84863 7.54746 4.52705 7.52121 5.05695 7.16795L5.16081 7.09871C6.32274 6.32409 7.81064 6.23146 9.05967 6.85597L10.2172 7.43475C10.7803 7.71628 11.443 7.71628 12.0061 7.43475L13.1636 6.85597C14.4127 6.23146 15.9006 6.32409 17.0625 7.09871L17.1664 7.16795ZM12.4075 15.4083L12.1915 18H10.0318L9.81581 15.4083C9.75263 14.6502 10.3509 14 11.1117 14C11.8724 14 12.4707 14.6502 12.4075 15.4083Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <span> فروشگاه </span>
                            </a>
                            <div className="dropdown header-bottom-part-navgation-item">
                                <button
                                    className="dropdown-toggle d-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                >
                                    <svg
                                        width="20"
                                        height="18"
                                        viewBox="0 0 20 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12.2218 0C8.90811 0 6.22182 2.68629 6.22182 6C6.22182 9.31371 8.90811 12 12.2218 12C15.5355 12 18.2218 9.31371 18.2218 6C18.2218 2.68629 15.5355 0 12.2218 0ZM8.22182 6C8.22182 3.79086 10.0127 2 12.2218 2C14.431 2 16.2218 3.79086 16.2218 6C16.2218 8.20914 14.431 10 12.2218 10C10.0127 10 8.22182 8.20914 8.22182 6Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M6.37722 17.5272C6.08605 17.9965 5.46957 18.1409 5.00028 17.8497C4.53098 17.5586 4.38658 16.9421 4.67774 16.4728C6.04714 14.2656 8.84861 12 12.2218 12C15.595 12 18.3965 14.2656 19.7659 16.4728C20.0571 16.9421 19.9127 17.5586 19.4434 17.8497C18.9741 18.1409 18.3576 17.9965 18.0664 17.5272C16.9443 15.7185 14.7062 14 12.2218 14C9.73749 14 7.49937 15.7185 6.37722 17.5272Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M6.11967 3.55972C6.36284 4.05559 6.15797 4.6547 5.6621 4.89786C4.75343 5.34344 4.22182 6.15179 4.22182 7C4.22182 7.84821 4.75343 8.65656 5.6621 9.10214C6.15797 9.3453 6.36284 9.94441 6.11967 10.4403C5.87651 10.9362 5.27741 11.141 4.78153 10.8979C3.30473 10.1737 2.22182 8.73353 2.22182 7C2.22182 5.26647 3.30473 3.82632 4.78153 3.10214C5.27741 2.85898 5.87651 3.06384 6.11967 3.55972Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M2.37722 17.5272C2.08605 17.9965 1.46957 18.1409 1.00028 17.8497C0.530979 17.5586 0.386575 16.9421 0.677742 16.4728C1.25684 15.5394 2.18337 14.7604 3.21705 14.1559C3.69381 13.8772 4.3063 14.0377 4.58508 14.5144C4.86386 14.9912 4.70337 15.6037 4.22661 15.8824C3.3629 16.3875 2.72743 16.9627 2.37722 17.5272Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span> اساتید </span>
                                </button>
                                <div className="dropdown-menu">
                                    <a href="#" className="acordon-body-item dropdown-item">
                                        <div className="d-flex align-items-center">
                                            <img src="simi-flags/simi-flag.svg" alt="flag" />
                                            <span> اساتید زبان انگلیسی </span>
                                        </div>
                                        <p className="acordon-body-item-badge">۳۰</p>
                                    </a>
                                </div>
                            </div>
                            <a
                                href="#"
                                className="header-bottom-part-navgation-item d-flex align-items-center"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M9.99986 4.1665C8.15891 4.1665 6.66653 5.65889 6.66653 7.49984C6.66653 9.34079 8.15891 10.8332 9.99986 10.8332C11.8408 10.8332 13.3332 9.34079 13.3332 7.49984C13.3332 5.65889 11.8408 4.1665 9.99986 4.1665ZM8.33319 7.49984C8.33319 6.57936 9.07938 5.83317 9.99986 5.83317C10.9203 5.83317 11.6665 6.57936 11.6665 7.49984C11.6665 8.42031 10.9203 9.1665 9.99986 9.1665C9.07938 9.1665 8.33319 8.42031 8.33319 7.49984Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M9.99986 18.3332C9.05245 18.3332 7.68642 18.1093 6.64973 17.6328C6.14119 17.3991 5.59554 17.0525 5.27369 16.5339C5.10378 16.2602 4.99643 15.9374 4.99994 15.5782C5.00342 15.2225 5.11499 14.8851 5.29768 14.5759C6.13308 13.1621 7.86615 11.6665 9.99986 11.6665C12.1336 11.6665 13.8666 13.1621 14.702 14.5759C14.8847 14.8851 14.9963 15.2225 14.9998 15.5782C15.0033 15.9374 14.8959 16.2602 14.726 16.5339C14.4042 17.0525 13.8585 17.3991 13.35 17.6328C12.3133 18.1093 10.9473 18.3332 9.99986 18.3332ZM6.73257 15.4238C6.66875 15.5318 6.66662 15.5854 6.66653 15.5945C6.66646 15.6006 6.66625 15.6171 6.68979 15.655C6.75595 15.7617 6.94811 15.9357 7.34568 16.1184C8.12119 16.4748 9.24055 16.6665 9.99986 16.6665C10.7592 16.6665 11.8785 16.4748 12.654 16.1184C13.0516 15.9357 13.2438 15.7617 13.3099 15.655C13.3335 15.6171 13.3333 15.601 13.3332 15.595C13.3331 15.5858 13.331 15.5318 13.2671 15.4238C12.6195 14.3277 11.3528 13.3332 9.99986 13.3332C8.64693 13.3332 7.38025 14.3277 6.73257 15.4238Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M2.08319 9.99984C2.08319 8.61913 3.20248 7.49984 4.58319 7.49984C5.9639 7.49984 7.08319 8.61913 7.08319 9.99984C7.08319 11.3806 5.9639 12.4998 4.58319 12.4998C3.20248 12.4998 2.08319 11.3806 2.08319 9.99984ZM4.58319 9.1665C4.12295 9.1665 3.74986 9.5396 3.74986 9.99984C3.74986 10.4601 4.12295 10.8332 4.58319 10.8332C5.04343 10.8332 5.41653 10.4601 5.41653 9.99984C5.41653 9.5396 5.04343 9.1665 4.58319 9.1665Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M2.41297 16.2037C2.20835 16.6159 1.70828 16.7842 1.29603 16.5796C0.883782 16.375 0.715463 15.8749 0.920082 15.4627C1.22624 14.8459 1.68963 14.2266 2.27257 13.7527C2.85573 13.2787 3.603 12.9165 4.45584 12.9165C4.91607 12.9165 5.28917 13.2896 5.28917 13.7498C5.28917 14.2101 4.91607 14.5832 4.45584 14.5832C4.08835 14.5832 3.70051 14.7398 3.32386 15.046C2.94699 15.3523 2.62589 15.7747 2.41297 16.2037Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M13.1749 9.99984C13.1749 8.61913 14.2942 7.49984 15.6749 7.49984C17.0556 7.49984 18.1749 8.61913 18.1749 9.99984C18.1749 11.3806 17.0556 12.4998 15.6749 12.4998C14.2942 12.4998 13.1749 11.3806 13.1749 9.99984ZM15.6749 9.1665C15.2147 9.1665 14.8416 9.5396 14.8416 9.99984C14.8416 10.4601 15.2147 10.8332 15.6749 10.8332C16.1351 10.8332 16.5082 10.4601 16.5082 9.99984C16.5082 9.5396 16.1351 9.1665 15.6749 9.1665Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M19.0833 15.4627C19.2879 15.8749 19.1196 16.375 18.7074 16.5796C18.2951 16.7842 17.795 16.6159 17.5904 16.2037C17.3775 15.7747 17.0564 15.3523 16.6795 15.046C16.3029 14.7398 15.915 14.5832 15.5475 14.5832C15.0873 14.5832 14.7142 14.2101 14.7142 13.7498C14.7142 13.2896 15.0873 12.9165 15.5475 12.9165C16.4004 12.9165 17.1477 13.2786 17.7308 13.7527C18.3138 14.2266 18.7772 14.8459 19.0833 15.4627Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <span> اساتید </span>
                            </a>
                            <a
                                href="#"
                                className="header-bottom-part-navgation-item d-flex align-items-center"
                            >
                                <svg
                                    width="21"
                                    height="18"
                                    viewBox="0 0 21 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.9981 7.89438C3.50412 7.64739 3.3039 7.04671 3.55089 6.55273C3.79787 6.05876 4.39855 5.85853 4.89253 6.10552L7.89253 7.60552C8.3865 7.85251 8.58673 8.45318 8.33974 8.94716C8.09275 9.44114 7.49208 9.64137 6.9981 9.39438L3.9981 7.89438Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M3.9981 10.8944C3.50412 10.6474 3.3039 10.0467 3.55089 9.55274C3.79787 9.05876 4.39855 8.85853 4.89253 9.10552L7.89253 10.6055C8.3865 10.8525 8.58673 11.4532 8.33974 11.9472C8.09275 12.4411 7.49208 12.6414 6.9981 12.3944L3.9981 10.8944Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M17.3397 6.55273C17.5867 7.04671 17.3865 7.64739 16.8925 7.89438L13.8925 9.39438C13.3985 9.64137 12.7979 9.44114 12.5509 8.94716C12.3039 8.45318 12.5041 7.85251 12.9981 7.60552L15.9981 6.10552C16.4921 5.85853 17.0928 6.05876 17.3397 6.55273Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M17.3397 9.55274C17.5867 10.0467 17.3865 10.6474 16.8925 10.8944L13.8925 12.3944C13.3985 12.6414 12.7979 12.4411 12.5509 11.9472C12.3039 11.4532 12.5041 10.8525 12.9981 10.6055L15.9981 9.10552C16.4921 8.85853 17.0928 9.05876 17.3397 9.55274Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10.4453 16.9999C10.7955 17.9366 10.7955 17.9366 10.7956 17.9366L10.8047 17.9332L10.8289 17.9241L10.9195 17.8896C10.9978 17.8597 11.1111 17.8161 11.2524 17.7607C11.535 17.65 11.9308 17.4919 12.3858 17.3016C13.2893 16.9237 14.4515 16.4081 15.424 15.8779C16.504 15.2891 18.0999 14.6167 19.0548 14.2304C19.8867 13.8939 20.4453 13.0864 20.4453 12.1753V2.56915C20.4453 1.12792 19.0657 0.0473012 17.6459 0.483627C16.7096 0.771374 15.4835 1.17495 14.5461 1.58308C13.5668 2.00945 12.3991 2.65991 11.4982 3.1883C11.0851 3.43056 10.7206 3.65167 10.4453 3.82108C10.1701 3.65167 9.80549 3.43056 9.39244 3.1883C8.49153 2.65991 7.32381 2.00945 6.34449 1.58308C5.40708 1.17495 4.18099 0.771374 3.2447 0.483627C1.82495 0.0473009 0.445312 1.12792 0.445312 2.56915V12.1753C0.445312 13.0864 1.00392 13.8939 1.83582 14.2304C2.7907 14.6167 4.38659 15.2891 5.46665 15.8779C6.43914 16.4081 7.60136 16.9237 8.50481 17.3016C8.95979 17.4919 9.35565 17.65 9.63819 17.7607C9.77956 17.8161 9.89279 17.8597 9.97116 17.8896L10.0618 17.9241L10.0859 17.9332L10.0943 17.9363C10.0943 17.9363 10.0951 17.9366 10.4453 16.9999ZM2.65717 2.39538C2.56535 2.36716 2.44531 2.42904 2.44531 2.56915V12.1753C2.44531 12.2577 2.49663 12.3403 2.58579 12.3764C3.53991 12.7623 5.23226 13.4723 6.42397 14.1219C7.30589 14.6027 8.39367 15.0872 9.27662 15.4565C9.33386 15.4805 9.39013 15.5039 9.44531 15.5267V5.55409C9.17468 5.38713 8.80376 5.16165 8.38061 4.91347C7.49233 4.39248 6.41005 3.79295 5.54613 3.41682C4.71781 3.05619 3.58202 2.67961 2.65717 2.39538ZM11.4453 5.55409V15.5267C11.5005 15.5039 11.5568 15.4805 11.614 15.4565C12.497 15.0872 13.5847 14.6027 14.4667 14.1219C15.6584 13.4723 17.3507 12.7623 18.3048 12.3764C18.394 12.3403 18.4453 12.2577 18.4453 12.1753V2.56915C18.4453 2.42904 18.3253 2.36716 18.2335 2.39538C17.3086 2.67961 16.1728 3.05619 15.3445 3.41682C14.4806 3.79295 13.3983 4.39248 12.51 4.91347C12.0869 5.16165 11.7159 5.38713 11.4453 5.55409Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M10.4453 16.9999L10.7956 17.9366C10.5698 18.021 10.3201 18.0207 10.0943 17.9363L10.4453 16.9999Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <span> کلاس های گروهی </span>
                            </a>
                            <a
                                href="#"
                                className="header-bottom-part-navgation-item d-flex align-items-center"
                            >
                                <svg
                                    width="22"
                                    height="18"
                                    viewBox="0 0 22 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M4.80469 0.400391C2.59555 0.400391 0.804688 2.19126 0.804688 4.40039V11.2004C0.804688 13.4095 2.59555 15.2004 4.80469 15.2004H8.8047V15.6004H7.05465C6.50237 15.6004 6.05465 16.0481 6.05465 16.6004C6.05465 17.1527 6.50237 17.6004 7.05465 17.6004H12.5547C13.1069 17.6004 13.5547 17.1527 13.5547 16.6004C13.5547 16.0481 13.1069 15.6004 12.5547 15.6004H10.8047V15.2004H13.7063C13.6168 15.3897 13.5576 15.6045 13.5548 15.8407C13.5505 16.2085 13.6843 16.5192 13.8596 16.7546C14.1746 17.1775 14.6641 17.4176 15.0355 17.5598C15.8271 17.863 16.848 18.0005 17.5547 18.0005C18.2613 18.0005 19.2823 17.863 20.0739 17.5598C20.4453 17.4176 20.9348 17.1775 21.2497 16.7546C21.4251 16.5192 21.5589 16.2085 21.5546 15.8407C21.5504 15.4795 21.4142 15.1685 21.2394 14.9221C20.6672 14.115 19.6224 13.3154 18.3394 13.074C18.3639 13.028 18.3874 12.9814 18.4101 12.9344C18.4206 12.9124 18.4303 12.8903 18.4392 12.868C19.6643 12.4905 20.5547 11.3495 20.5547 10.0005C20.5547 8.78974 19.8375 7.74651 18.8047 7.27251V4.40039C18.8047 2.19125 17.0138 0.400391 14.8047 0.400391H4.80469ZM14.5547 10.0005C14.5547 11.1578 15.21 12.162 16.1697 12.6624C15.8118 12.9967 15.3316 13.2004 14.8047 13.2004H4.80469C3.70012 13.2004 2.80469 12.305 2.80469 11.2004V4.40039C2.80469 3.29582 3.70012 2.40039 4.80469 2.40039H14.8047C15.9093 2.40039 16.8047 3.29582 16.8047 4.40039V7.095C15.5108 7.42803 14.5547 8.60261 14.5547 10.0005ZM17.5547 9.00049C17.0024 9.00049 16.5547 9.4482 16.5547 10.0005C16.5547 10.5528 17.0024 11.0005 17.5547 11.0005C18.107 11.0005 18.5547 10.5528 18.5547 10.0005C18.5547 9.4482 18.107 9.00049 17.5547 9.00049ZM15.8218 15.7182C16.3328 15.8985 17.0561 16.0005 17.5547 16.0005C18.0533 16.0005 18.7765 15.8985 19.2876 15.7182C18.8596 15.3226 18.2297 15.0005 17.5547 15.0005C16.8797 15.0005 16.2497 15.3226 15.8218 15.7182Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <span> وبینار ها </span>
                            </a>
                            <div className="dropdown header-bottom-part-navgation-item">
                                <button
                                    className="dropdown-toggle d-flex align-items-center gap-1 ffm"
                                    data-bs-toggle="dropdown"
                                >
                                    <svg
                                        width="19"
                                        height="22"
                                        viewBox="0 0 19 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.66602 11C4.66602 10.4477 5.11373 10 5.66602 10H13.666C14.2183 10 14.666 10.4477 14.666 11C14.666 11.5523 14.2183 12 13.666 12H5.66602C5.11373 12 4.66602 11.5523 4.66602 11Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M5.66602 15C5.11373 15 4.66602 15.4477 4.66602 16C4.66602 16.5523 5.11373 17 5.66602 17H13.666C14.2183 17 14.666 16.5523 14.666 16C14.666 15.4477 14.2183 15 13.666 15H5.66602Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M4.66602 0C2.45688 0 0.666016 1.79086 0.666016 4V18C0.666016 20.2091 2.45688 22 4.66602 22H14.666C16.8752 22 18.666 20.2091 18.666 18V8.08615C18.666 7.1504 18.338 6.24427 17.7389 5.52541L14.3338 1.43926C13.5738 0.527292 12.448 0 11.2609 0H4.66602ZM2.66602 4C2.66602 2.89543 3.56145 2 4.66602 2H10.666V5C10.666 7.20914 12.4569 9 14.666 9H16.666V18C16.666 19.1046 15.7706 20 14.666 20H4.66602C3.56145 20 2.66602 19.1046 2.66602 18V4ZM16.3454 7C16.3019 6.93274 16.2542 6.86786 16.2025 6.80578L12.7973 2.71963C12.7557 2.66966 12.7119 2.622 12.666 2.57674V5C12.666 6.10457 13.5614 7 14.666 7H16.3454Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span> آزمون ها </span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#" className="dropdown-item ffr">
                                            <p>سلام</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item ffr"> سلام </a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item ffr"> سلام </a>
                                    </li>
                                </ul>
                            </div>
                            <a
                                href="#"
                                className="header-bottom-part-navgation-item d-flex align-items-center"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M6.6665 6.90403V16.6667C6.6665 17.5872 5.92031 18.3334 4.99984 18.3334H3.33317C2.4127 18.3334 1.6665 17.5872 1.6665 16.6667V3.33336C1.6665 2.41289 2.4127 1.66669 3.33317 1.66669H4.99984C5.62355 1.66669 6.16725 2.0093 6.45299 2.5166C6.65673 2.3222 6.91254 2.17687 7.20566 2.10499L8.82436 1.70802C9.71834 1.48878 10.6208 2.03577 10.84 2.92976L13.3332 13.0961V3.33336C13.3332 2.41289 14.0794 1.66669 14.9998 1.66669H16.6665C17.587 1.66669 18.3332 2.41288 18.3332 3.33336V16.6667C18.3332 17.5872 17.587 18.3334 16.6665 18.3334H14.9998C14.3761 18.3334 13.8324 17.9907 13.5467 17.4834C13.3429 17.6778 13.0871 17.8232 12.794 17.895L11.1753 18.292C10.2813 18.5112 9.37887 17.9643 9.15964 17.0703L6.6665 6.90403ZM7.60262 3.72369L9.22132 3.32672L12.397 16.2763L10.7783 16.6733L7.60262 3.72369ZM4.99984 3.33336L3.33317 3.33336V16.6667H4.99984V3.33336ZM16.6665 3.33336L14.9998 3.33336V16.6667H16.6665V3.33336Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <span> کتابخانه </span>
                            </a>
                            <a
                                href="#"
                                className="header-bottom-part-navgation-item d-flex align-items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                                    />
                                </svg>
                                <span> درباره ما </span>
                            </a>
                            <a
                                href="#"
                                className="header-bottom-part-navgation-item d-flex align-items-center"
                            >
                                <svg
                                    width="20"
                                    height="22"
                                    viewBox="0 0 20 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M19 12V14C19 15.6569 17.6569 17 16 17C14.3431 17 13 15.6569 13 14V12C13 10.3431 14.3431 9 16 9C17.6569 9 19 10.3431 19 12ZM19 12V10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10V12M1 12V14C1 15.6569 2.34315 17 4 17C5.65685 17 7 15.6569 7 14V12C7 10.3431 5.65685 9 4 9C2.34315 9 1 10.3431 1 12ZM19 13V15C19 18.3137 16.3137 21 13 21H10"
                                        stroke="currentcolor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <span> تماس با ما </span>
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;