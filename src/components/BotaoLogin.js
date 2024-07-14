const BotaoLogin = ({ children, onClick }) => (
    <button type='submit' className='form__botao' onClick={onClick}>
        {children}
    </button>
);
export default BotaoLogin;
