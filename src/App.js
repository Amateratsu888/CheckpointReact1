
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div  className=" well well-lg bg-secondary" style={{height:'100vh'}}>
    <h3 className="text-center text-white pt-5">Formulaire d'inscription</h3>
    <div className="container">
        <div className="row justify-content-center align-items-center">
            <div  className="col-md-6">
                <div  className="col-md-12">
                    <form  className="form">
                        <div className="form-group">
                            <label for="username" className="text-info">Nom:</label><br/>
                            <input type="text"  className="form-control"/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label for="username" className="text-info">Prenom:</label><br/>
                            <input type="text"  className="form-control"/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label for="username" className="text-info">Email:</label><br/>
                            <input type="mail"  className="form-control"/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label for="username" className="text-info">Adresse:</label><br/>
                            <input type="text" className="form-control"/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label for="username" className="text-info">Telephone:</label><br/>
                            <input type="number" className="form-control"/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label for="password" className="text-info">Password:</label><br/>
                            <input type="text"  className="form-control"/>
                        </div>
                        
                        <div class="form-group">
                    
                            <input type="submit" className="btn btn-info btn-md" />
                        </div>
                
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;
