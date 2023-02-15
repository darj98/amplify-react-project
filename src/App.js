import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
    cssUse();
    return (
        <>
            <div class="user-logged">
                <div class="teste">
                    <h1 class="texto-final">
                        Olá, Você foi autenticado com sucesso!
                    </h1>
                    <button class="button" onClick={signOut}>
                        Sign out
                    </button>
                </div>
            </div>
        </>
    );
}

function cssUse() {
    // Get HTML head element
    var head = document.getElementsByTagName('HEAD')[0];

    // Create new link Element
    var link = document.createElement('link');

    // set the attributes for link element
    link.rel = 'stylesheet';

    link.type = 'text/css';

    link.href = 'index.css';

    // Append link element to HTML head
    head.appendChild(link);
}

export default withAuthenticator(App);
