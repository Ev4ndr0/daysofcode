import styles from './index.module.css';
import formStyles from './form.module.css';

export default function AssinaturaNewsletter(){
    return(
        <div className={styles.assinaturaNewsletter}>
            <div className={styles.assinaturaNewsletter__container}>
                <div className={styles.assinaturaNewsletter__container__text}>
                    <h1>
                        Sua Casa com as 
                        <br />
                        <strong>
                            melhores <br /> plantas
                        </strong>
                    </h1>
                    <p>
                        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-la uma pessoa mais feliz no seu dia a dia. Entre com o seu email e assine nossa newsletter para saber das novidades da marca
                    </p>
                </div>
                <form className={formStyles.form} action="/">
                    <div className={formStyles.fieldGroup}>
                        <input type="email" placeholder='Insira seu Email'/>
                        <button>
                            Assinar Newsletter
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    );
}