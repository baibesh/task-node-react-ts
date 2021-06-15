import {Get, Route} from "tsoa";

interface WelcomeResponse {
    message: string;
}

@Route('welcome')
export default class WelcomeController {
    @Get('/')
    public async getMessage(): Promise<WelcomeResponse> {
        return {
            message: 'Welcome to API'
        }
    }
}
