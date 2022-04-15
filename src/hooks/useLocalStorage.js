import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false)
            } catch (err) {
                setError(error);
            }
        }, 5000);
    })

    const saveItem = (newItem) => {
        try {
            newItem.sort(todo => todo.completed ? 1 : -1);
            const stringItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    }
    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage };