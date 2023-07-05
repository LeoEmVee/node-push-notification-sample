console.log("Service worker loaded...");

self.addEventListener("push", e => {
    const data = e.data.json();
    console.log("Push received...");
    self.registration.showNotification(data.title, {
        body: 'Notified by yourself',
        icon: 'https://media.istockphoto.com/id/994816678/es/foto/cachorro-de-perro-haciendo-su-aseo.jpg?s=612x612&w=is&k=20&c=DhMDUKKzw_xJudaZGwbr1BHfg2pUHrjy8ohipTiye-I='
    });
});
