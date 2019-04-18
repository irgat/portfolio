import React from 'react';
import DocumentTitle from 'react-document-title';
import SocialBar from './components/SocialBar';
import Separator from './components/Separator';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.data = {};

        this.state = {
            dataLoaded: false,
        };
    }

    componentWillMount() {
        //load JSON
        // setInterval(() => {
        fetch('data.json')
            .then(
                (response) => {
                    return response.json();
                }
            )
            .then(
                (json) => {
                    //update data and state
                    this.data = json;
                    this.setState({
                        dataLoaded: true,
                    });
                }
            );
        // }, 3000);
    }

    render() {
        if (!this.state.dataLoaded) {
            //preloader
            return (
                <h2>Loading...</h2>
            );
        } else {
            let labels = this.data.labels;
            let content = this.data.content;

            return (
                <DocumentTitle title={content.fullName}>
                    <div style={{ 'backgroundColor': 'green' }}>
                        <header>
                            <SocialBar items={content.social.header} />
                            <h1>{content.fullName}</h1>
                            <h2>{content.title}</h2>
                        </header>

                        <main>
                            <Separator label={labels.about} />

                            {/* about */}
                            <div dangerouslySetInnerHTML={{ __html: content.about }} />

                            <Separator label={labels.clients} />

                            {/* client list */}
                            <div>
                                <p>[Client List]</p>
                            </div>
                        </main>

                        <footer>
                            <Separator label={labels.contact} />
                            <p>{content.email}</p>
                            <p>{content.mobile}</p>
                            <SocialBar items={content.social.footer} />
                            <SocialBar items={content.social.donation} />
                        </footer>
                    </div>
                </DocumentTitle>
            );
        }
    }
}

export default App;
