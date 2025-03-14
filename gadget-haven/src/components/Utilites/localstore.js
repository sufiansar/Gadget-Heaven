const getstorecard = () => {
  const storListstr = localStorage.getItem("card-here");
  if (storListstr) {
    const storedList = JSON.parse(storListstr);
    return storedList;
  } else return [];
};
const addstorecard = (id) => {
  const storelist = getstorecard();
  if (storelist.includes(id)) {
    console.log("already exit", id);
  } else {
    storelist.push(id);
    const storeListStr = JSON.stringify(storelist);
    localStorage.setItem("card-here", storeListStr);
  }
};

const addWishlist = (id) => {
  const storelist = getstorecard();
  if (storelist.includes(id)) {
    console.log("already exit", id);
  } else {
    storelist.push(id);
    const storeListStr = JSON.stringify(storelist);
    localStorage.setItem("card-here", storeListStr);
  }
};

export { addstorecard, addWishlist, getstorecard };
