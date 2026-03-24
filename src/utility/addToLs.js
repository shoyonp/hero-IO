const getStoredApp = () => {
  const storedDataSTR = localStorage.getItem("installed");
  if (storedDataSTR) {
    const storedAppData = JSON.parse(storedDataSTR);
    return storedAppData;
  } else {
    return [];
  }
};

const addToLocalStorage = (id) => {
  const storedAppData = getStoredApp();
  if (storedAppData.includes(id)) {
    alert("ID already exist");
  } else {
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("installed", data);
  }
};

export { addToLocalStorage,getStoredApp };
