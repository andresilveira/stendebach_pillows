import React from 'react';

import '../bootstrap.min.css'

const FormFooter = (props) => (
  <div className="row justify-content-center">
    <button type="submit" className="col-sm-4 btn btn-primary">Abfrage 1 &rarr;</button>
    <div className="col-4"></div>
    <button type="submit" className="col-sm-4 btn btn-primary">Abfrage 2 &rarr;</button>
  </div>
)

export default FormFooter;