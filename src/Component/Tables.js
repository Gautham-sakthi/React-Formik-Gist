import React from "react";

function Tables() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [state, setstate] = useState([]);
  const [, setAddress] = useState([]);
  const [comp, setComp] = useState([]);

  const [loading, setLoading] = useState(true);

  function addreduce(data) {
    const add = data;
    const addreduced = add.reduce((a, c) => {
      return [...a, c.address];
    }, []);
    const addcompany = add.reduce((a, c) => {
      return [...a, c.company];
    }, []);
    console.table(addreduced);
    console.table(addcompany);
    return [addreduce, addcompany];
  }
  useEffect(() => {
    const fectData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setstate(data);
      const [add, comp] = addreduce(data);
      setAddress(add);
      setComp(comp);
      setLoading(false);
    };
    fectData().then((err) => console.log(err));
  }, []);
  return (
    <div>
      <table>
        {!loading ? (
          <>
            <th>name</th>
            <th>username</th>
            <th>email</th>
          </>
        ) : null}

        {!loading &&
          comp &&
          state &&
          state.map((el) => (
            <tr>
              <td>{el.name}</td>
              <td>{el.username}</td>
              <td>{el.email}</td>
            </tr>
          ))}
        <h3>address</h3>
        {!loading &&
          comp &&
          comp.map((el, idx) => (
            <tr>
              <td key={idx}>{el.name}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default Tables;
