import Figure from 'react-bootstrap/Figure';

export default function Partners() {

    const images = [
        { image: "Images/Partners/Niji_farm_logo.png" },
        // { image: "Images/Partners/logo_big_dutchman_sponsor.png" },
        { image: "Images/Partners/Jubaili-Agrotec-and-farmsquare-nigeria.png" },
        { image: "Images/Partners/bigdutchman-logo.svg" },
        // { image: "Images/Partners/big-dutchman-r-inauen-ag-mitarbeiter-poultry-pep-text-orange-logo.png" }
    ]

    return (
        <>
            <Figure style={{display:"flex", justifyContent:"center", width:"90%", alignItems:"center"}}>
                {
                    images.map(showPartners => {
                        return <>

                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src={showPartners.image}
                                />
                            </Figure >


                        </>
                    })}
                <>
                    {/* <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption> */}
                </>


            </Figure>


        </>
    )




}