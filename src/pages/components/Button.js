function Button({num}) {
  return (
    <>
      <button onClick={() => alert("You clicked on button " + num)}>
        Button {num}
      </button>
    </>
  )
}

export default Button