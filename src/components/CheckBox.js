function Checkbox() {
    return (
        <>
            <div className='form__campo-checkbox'>
                <input type="checkbox" id='lembrar' />
                <label htmlFor="lembrar" />
            </div>
            <p className='form__opcoes-texto'>Lembra-me</p>
        </>
    )
}
export default Checkbox
