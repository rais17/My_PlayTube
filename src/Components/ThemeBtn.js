import React, {useState, useEffect} from "react";

const ThemeBtn = () => {

    const [themeMode, setThemeMode] = useState(
      localStorage.getItem("themeMode") || "light",
    );

    useEffect(() => {
      // Update the HTML class when the theme mode changes
      document.querySelector("html").classList.remove("dark", "light");
      document.querySelector("html").classList.add(themeMode);
    }, [themeMode]);

    const handleTheme = (e) => {
      const themeModeStatus = e.currentTarget.checked;
      const newTheme = themeModeStatus ? "light" : "dark";

      // Store the new theme mode in local storage
      localStorage.setItem("themeMode", newTheme);

      // Update the component state to reflect the new theme mode
      setThemeMode(newTheme);
    };

  return (
    <div className="flex items-center gap-3 px-3 py-2">
      <input
        checked={themeMode === "light"}
        onChange={(e) => handleTheme(e)}
        id="checked-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 rounded-full dark:border-gray-600 dark:bg-gray-700 "
      />
      <label
        for="checked-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Switch Theme
      </label>
    </div>
  );
};

export default ThemeBtn;
