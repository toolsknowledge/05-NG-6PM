import Product from "src/app/common/model/product.model";

interface PostState{
    loading:boolean;
    product:Product;
    error:string;
}

export default PostState;