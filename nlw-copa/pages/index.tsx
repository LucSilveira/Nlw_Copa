interface HomeProps {
  contagem : number;
}

export default function Page( props : HomeProps ){
  return (
    <div>
      <h1>Hello Wordl  { props.contagem }</h1>
    </div>
  )
} 

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/bolao/contagem')
  const data = await response.json()

  console.log( data )
  return {
    props : {
      contagem : data.boloes
    }
  }
}