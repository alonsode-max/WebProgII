    export const postSignup = async (user) => {
    const data = await fetch("https://68dc02237cd1948060a9283f.mockapi.io/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const respJson = await data.json();
    return respJson;
  };

  export const editUser = async (user,id) => {
    const data = await fetch(`https://68dc02237cd1948060a9283f.mockapi.io/user/?password=${id} `, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
      //No funciona ese link
    });
    const respJson = await data.json();
    return respJson;
  };
  
  export const getUsers = async () => {
    const data = await fetch("https://68dc02237cd1948060a9283f.mockapi.io/user");
    const respJson = await data.json();
    return respJson;
  };

  export const postLogin = async (name, password) => {
    const data = await fetch(`https://68dc02237cd1948060a9283f.mockapi.io/user/?userName=${name}&password=${password} `);
    const respJson = await data.json();
    return respJson;
  };
  
  export const getCommerces = async () => {
    const data = await fetch("https://68dc02237cd1948060a9283f.mockapi.io/commerce");
    const respJson = await data.json();
    return respJson;
  };

  export const searchCommerces = async (input, inpType) => {
    const data = await fetch(`https://68dc02237cd1948060a9283f.mockapi.io/commerce/?${input}=${inpType}`);
    const respJson = await data.json();
    return respJson;
  };
  
  export const getReviewsByUser = async (user) => {
    const data = await fetch(`https://68dc0abd7cd1948060a947f7.mockapi.io/rw/reviews/?user=${user} `);
    const respJson = await data.json();
    return respJson;
  };

  export const getReviewsByCommerce = async (com) => {
    const data = await fetch(`https://68dc0abd7cd1948060a947f7.mockapi.io/rw/reviews/?commerce=${com} `);
    const respJson = await data.json();
    return respJson;
  };

  export const postSignCom = async (com) => {
    const data = await fetch("https://68dc02237cd1948060a9283f.mockapi.io/commerce", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(com),
    });
    const respJson = await data.json();
    return respJson;
  };
