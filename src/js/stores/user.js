
import { observable, action } from 'mobx';
import axios from 'axios';

class User {
    @observable loading = true;
    @observable profile = {};
    @observable playlists = [];

    @action async getUser(userid) {
        self.loading = true;

        var response = await axios.get(`/user/${userid}`);

        self.profile = response.data.profile;
        self.playlists = response.data.playlists;
        self.loading = false;
    }
}

const self = new User();
export default self;
