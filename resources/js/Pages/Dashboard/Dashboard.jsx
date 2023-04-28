
import DashboardLayout from "@/Layouts/DashboardLayout";
import Card from "./components/Card";
import Header from "./components/Header";
import { useEffect, useState } from "react";


function Dashboard(props) {
  console.log(props)

  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    setPlatos(props.platos)
  }, []);

  return (
    <>
      <DashboardLayout>
        {/* Header */}
        <Header />
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Card */}
          {
            platos.map((plato, index) => {
              return (
                <Card
                  key={index}
                  id={plato.id}
                  category_id={plato.category_id}
                  img={plato.foto}
                  name={plato.name}
                  description={plato.description}
                  price={plato.precio}
                  categoria={plato.categoria}
                  setPlatos={setPlatos}
                />
              )
            })
          }

        </div>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;

