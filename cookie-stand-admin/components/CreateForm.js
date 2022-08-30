
export default function Form(){
    const initialValues = {
        location: '',
        max: 0,
        min: 0,
        avg: 0,
    };
    
    const [values, setValues] = useState(initialValues);
    
    function submitHandler(event) {
        event.preventDefault();
        let newdata={
    
          location:event.target.location.value,
          MinimumCustomersperHour:parseInt(event.target.MinimumCustomersperHour.value),
          MaximumCustomersperHour:parseInt(event.target.MaximumCustomersperHour.value),
          AverageCookiesperSale:parseFloat(event.target.AverageCookiesperSale.value),
    
        
        };
        setValues(newdata);
    
    }

    return(
        
    <form className="flex flex-col p-6 mx-20 my-5 bg-green-300 rounded-md" onSubmit={submitHandler}>
    <div className="mb-4 text-center">
      <h2 className="text-xl">Create Cookie Stand</h2>
    </div>
    <div className="flex w-full mb-4">
      <label className="pr-2">Location:</label>
      <input
        className="w-full"
        name="location"
        type="text"
      
      />
    </div>
    <div className="flex items-center gap-2 text-center">
      <div className="bg-green-200 rounded-md ">
        <label>Minimum Customers per Hour</label>
        <input
          name="minimum_customers_per_hour"
          type="number"
     
        />
      </div>
      <div className="bg-green-200 rounded-md">
        <label>Maximum Customers per Hour</label>
        <input
          name="maximum_customers_per_hour"
          type="number"
        
        />
      </div>
      <div className="bg-green-200 rounded-md">
        <label>Average Cookies per Sale</label>
        <input
          name="average_cookies_per_sale"
          type="number"
        
        />
      </div>
      <button className="px-5 bg-green-400">Create</button>
    </div>
  </form>
    )

}