import TableWrapper from "./_components/table/TableWrapper";
import { images } from "@/libs/Image";
const files = [
  {
    name:"something",
    quantity:5,
    price:100
  }
]
const CartHome = () => {
  return (
    <div className="m-auto max-w-[950px] w-[90%] ">
      <div className="mt-8 flex flex-col justify-start ">
        <h2 className="text-2xl font-semibold">
          Shopping Cart
        </h2>

        <div >
          3 items
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="w-3/4 mt-5">
          <TableWrapper files={files}/>
         
           
        </div>
        <div className=" summary bg-[#ddd]">
          <div>
            <h5>
              <b>Summary</b>
            </h5>
          </div>
          <hr />
          <div className="row">
            <div
            
            >
              ITEMS 3
            </div>
            <div >&euro; 132.00</div>
          </div>
          <form>
            <p>SHIPPING</p>
            <select>
              <option className="text-muted">
                Standard-Delivery- &euro;5.00
              </option>
            </select>
            <p>GIVE CODE</p>
            <input  placeholder="Enter your code" />
          </form>
          <div
            
          >
            <div >TOTAL PRICE</div>
            <div >&euro; 137.00</div>
          </div>
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartHome;
