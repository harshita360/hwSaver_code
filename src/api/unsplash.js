import axios from 'axios';
export default axios.create({

  baseURL:'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID eR4hINmz_92b4Lpky-jTg5Cb-7BMoH98Fjt281n0Eko'
  }

});
