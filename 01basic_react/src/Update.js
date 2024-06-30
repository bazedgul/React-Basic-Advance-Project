import { useState } from "react";
function Update({}) {
    const [setName,name]= useState("");
    const [setError,error] = useState(null);
    const [isPending,setIsPending] = useState(false);
  
    const handleSubmit = async async =>{
      setIsPending(true);
      const error = await Update(name);
      setIsPending(false);
      if(error){
        setError(error);
        return;
      }
      // eslint-disable-next-line no-undef
      redirect("/path");
     };

  return (
    <div>
      <h1>Hello World</h1>
      <input value={name} onChange={(event)=> setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </div>
  );
}
export default Update
