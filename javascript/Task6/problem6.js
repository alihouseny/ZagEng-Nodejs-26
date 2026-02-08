//Using Promises
function login() {
  return new Promise(r => setTimeout(() => r({ id: 1 }), 800));
}
function getProfile(id) {
  return new Promise(r => setTimeout(() => r({ id, name: "Ali" }), 800));
}

function getSettings(id) {
  return new Promise(r => setTimeout(() => r({ theme: "dark", lang: "en" }), 800));
}
login()
  .then(user => getProfile(user.id))
  .then(profile => getSettings(profile.id))
  .then(settings => console.log(settings));




   // Using async/await
   async function loadUserData() {
  const user = await login();
  const profile = await getProfile(user.id);
  const settings = await getSettings(profile.id);
  console.log(settings);
}

loadUserData();