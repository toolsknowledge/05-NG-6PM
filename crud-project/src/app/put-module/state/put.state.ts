import Product from "src/app/common/model/product.model";
interface PutState{
    loading:boolean;
    product:Product;
    error:string;
};
export default PutState;