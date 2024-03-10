import './App.css'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import Card from "./Card"
function App() {
  let data =[
    {
      planName : "FREE",
      price: 0,
      features : [
        {
          name :"Single User",
          enabled : true,
        },
        {
          name :"50GB Storage",
          enabled : true,

        },
        {
          name :"Unlimited Public Projects",
          enabled : true,

        },
        {
          name :"Community Access",
          enabled : true,

        },
        {
          name :"Unlimited Private Project",
          enabled : false,

        },
        {
          name :"Dedicated Phone Support",
          enabled : false,

        },
        {
          name :"Free Subdomain",
          enabled : false,

        },
        {
          name :"Monthly Status Report",
          enabled : false,

        }

      ],
    },
    {
      planName : "PLUS",
      price: 9,
      features : [
        {
          name :"5 Users",
          enabled : true,

        },
        {
          name :"50GB Storage",
          enabled : true,

        },
        {
          name :"Unlimited Public Projects",
          enabled : true,

        },
        {
          name :"Community Access",
          enabled : true,

        },
        {
          name :"Unlimited Private Project",
          enabled : true,

        },
        {
          name :"Dedicated Phone Support",
          enabled : true,

        },
        {
          name :"Free Subdomain",
          enabled : true,

        },
        {
          name :"Monthly Status Report",
          enabled : false,


        }

      ],



    },
    {
      planName : "PRO",
      price: 49,
      features : [
        {
          name :"Unlimited Users",
          enabled : true,

        },
        {
          name :"50GB Storage",
          enabled : true,

        },
        {
          name :"Unlimited Public Projects",
          enabled : true,

        },
        {
          name :"Community Access",
          enabled : true,

        },
        {
          name :"Unlimited Private Project",
          enabled : true,

        },
        {
          name :"Dedicated Phone Support",
          enabled : true,

        },
        {
          name :"Free Subdomain",
          enabled : true,

        },
        {
          name :"Monthly Status Report",
          enabled : true,

        }

      ],



    }
  ]

  return (
    <div className='conatiner'>
      <div className='row'>
{
  data.map((item,index) => {
    return <Card item={item} key={index} />;
  })
}
  

        </div>
      </div>
    
  )
}

export default App
