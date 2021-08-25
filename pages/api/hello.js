import get_me_data from "../servis/get_me_data";

export default (req, res) => {
    res.send(get_me_data());
}


