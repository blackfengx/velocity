# CarCar

Team:

* Person 2 - Bradley Daniels - Sales
* Person 1 - Braden Towns - Service

## Design

React Front-End / Django Back-End / PostgreSQL

## Service microservice

Back End
    models.py
    - Created an AutomobileVO that is used in the poller so that the inventory microservice can communicate with the Service microservice.
    -Technician and Appointment model created within the "Service" microservice in order to populate a list and form on the front end using react.

    views.py
    - Views created for all models that allow for creation, listing, and deletion on the front end for their respective models.

    urls.py
    - Created URL's that allow for requests to be sent and received.

Front End
    - Created Forms and Lists for every model in the Inventory and Service microservice which will allow the user to view, delete, and create their respective contents.
    - Created a Filter bar which allows the user to filter appointments by VIN on the List Appointments page.


## Sales microservice

 # Back End:

    models.py:
    - Created an `AutomobileVO` and used poller to be able to communicate to the Inventory Microservice.
    - Created three other models, `Salesperson`, `PotentialCustomer`, and `SalesRecord` with required properties so we could create, update, get a list of all, get specified details of one, or delete an instance from said models using views and encoders.

    urls.py:
    - Contains urls allowing requests to be sent to retrieve information about `Salespersons`, `Potential Customers`, and `Sales/Sales Records`

    views.py:
    - Contains list and detail functions that allow "POST"and "GET" requests for potential customers, salespersons, and sale records.

    Poller:
    Enables communication to the Inventory microservice.


 # Front End:

    Sales Folder:
    - Contains all of the folders for the Sales microservice on the front end which specifically house all of the .js files for the Sales microservice front end.

        PotentialCustomer Folder:
        - Located within the Sales folder.
        - Contains `PotentialCustomerForm.js` which is used to create a potential customer.
        - Contains `PotentialCustomerList.js` which is used to list all of created potential customers.

        Salesperson Folder:
        - Located within the Sales folder.
        - Contains `SalespersonForm.js` which is used to create a salesperson.
        - Contains `SalespersonHistory.js` which is used to view a specific salespersons' sale record.
        - Contains `SalespersonList.js` which is used to view all registered salespersons.

        SalesRecord Folder:
        - Located within the Sales folder.
        - Contains `SalesRecordForm.js` which is used to create a sales record.
        - Contains `SalesRecordList.js` which is used to list all created sales records.
