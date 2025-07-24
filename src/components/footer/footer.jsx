import styles from './footer.module.scss'

export const Footer = () => {
    return (
        <footer>
            <div>
                <hgroup><h4>Adresse:</h4></hgroup>
                <ul>
                    <li>Intet nyt - Godt nyt ApS</li>
                    <li>Tulipanvej 232</li>
                    <li>7320</li>
                    <li>Valby Øster</li>
                </ul>
            </div>
            <div>
                <hgroup><h4>Links</h4></hgroup>
                <ul>
                    <li><a href="https://vikanweb.dk" target="_blank" rel="noopener noreferrer">vikanweb.dk</a></li>
                    <li><a href="https://overpådenandenside.dk" target="_blank" rel="noopener noreferrer">overpådenandenside.dk</a></li>
                    <li><a href="https://retsinformation.dk" target="_blank" rel="noopener noreferrer">retsinformation.dk</a></li>
                    <li><a href="https://nogetmednews.dk" target="_blank" rel="noopener noreferrer">nogetmednews.dk</a></li>
                </ul>
            </div>
            <div>
                <hgroup><h4>Politik</h4></hgroup>
                <ul>
                    <li>Privatlivspolitik</li>
                    <li>Cookiepolitik</li>
                    <li>Købsinformation</li>
                    <li>Delingspolitik</li>
                </ul>
            </div>
            <div>
                <hgroup><h4>Kontakt</h4></hgroup>
                <ul>
                    <li>ingn@nyhed.dk</li>
                    <li>teletfon: 23232323</li>
                    <li>fax: 123123-333</li>
                    <li></li>
                </ul>
            </div>
        </footer>
    )
}