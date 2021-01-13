import SilverWare from '../SilverWare/SilverWare'

const DinnerSupplies = ({guestList}) => {
    return (
        <>
        <h2>Dinner Supplies</h2>
        <SilverWare name="Spoons" guestList={guestList} />
        <SilverWare name="Forks" guestList={guestList} />
        <SilverWare name="Knives" guestList={guestList} />
        </>
    )
}

export default DinnerSupplies