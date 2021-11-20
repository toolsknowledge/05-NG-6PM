import Product from "src/app/common/model/product.model";

interface GetState{
    loading:boolean,
    products:Product[],
    error:string;
}
export default GetState;