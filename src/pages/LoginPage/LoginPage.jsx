import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import "./LoginPage.scss";

export const LoginPage = () => {
    return (
        <ContentWrapper>
            <div id="loginPageContainer">
                <div id="loginFormContainer">
                    <h3>Log ind</h3>
                    <form action="">
                        <div className="formGroup">
                            <label htmlFor="username">Brugernavn:</label>
                            <input type="text" id="username" name="username" required />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <button type="submit">Log ind</button>
                    </form>
                </div>
            </div>

        </ContentWrapper>
    )
}