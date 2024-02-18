import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyCfsUPYcM5UoAKexM2tny-wS4kYIdKqcpg",
    cx: "166c8ba6072d44eaa",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
