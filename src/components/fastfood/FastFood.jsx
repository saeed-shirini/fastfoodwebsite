import { SiBitcoincash } from "react-icons/si";
import { LuClipboardType } from "react-icons/lu";

function FastFood({ id, imageUrl, name, ingredients, price }) {
  return (
    <div key={id} className="card">
      <div className="card-header">
        <img src={imageUrl} alt="" />
        <h2>{name}</h2>
      </div>

      <div className="card-body">
        <p>مخلفات: {ingredients}</p>
      </div>
      <div className="card-footer">
        <button>
          <SiBitcoincash />
          <p>{price}</p>
        </button>

        <button>
          <LuClipboardType />
          <p>{name.split(" ")[0]}</p>
        </button>
      </div>
    </div>
  );
}

export default FastFood;
