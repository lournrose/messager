import axios from "axios";

export default class MessagesService {
    static async getAll(limit = 15, userId = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                userId: userId
            }
        })
        return response;
    }
}