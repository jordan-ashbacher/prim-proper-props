const GuestList = ({guestList}) => {
    console.log(guestList)
    return (
        <tbody>
        {guestList.map(guest => (
          <tr key={guest.id}>
            <td>{guest.name}</td>
            <td>{String(guest.kidsMeal)}</td>
          </tr>
        ))}
      </tbody>
    )
}

export default GuestList