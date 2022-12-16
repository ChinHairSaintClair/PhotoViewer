import Unsplash from "./endpoints/Unsplash"

class Driver extends Unsplash{
    private static _instance: Driver = new Driver();
    private constructor () {super();}
    public static getInstance = () => Driver._instance;
}

export default Driver