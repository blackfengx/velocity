# CarCar

Team:

* Person 2 - Bradley Daniels - Sales
* Person 1 - Braden Towns - Service

## Design

React Front-End / Django Back-End / PostgreSQL

## Service microservice

Back End
    models.py
    - Created an AutomobileVO that is used in the poller so that the inventory microservice can communicate with the service microservice.
    -Technician and Appointment model created within the "Service" microservice in order to populate a list and form on on the front end using react.

    views.py
    - Views created for all models that allow for creation, listing, and deletion on the front end for their respective models.

    urls.py
    - Created URL's that allow for requests to be sent and received.

Front End
    - Created Forms and Lists for every model in the Inventory and Service microservice which will allow the user to view, delete, and create their respective contents.
    - Created a Filter bar which allows the user to filter appointments by VIN on the List Appointments page.


## Sales microservice

models.py
- Created an `AutomobileVO` and used poller to be able to communicate to the Inventory Microservice.
- Created three other models, `Salesperson`, `PotentialCustomer`, and `SalesRecord` with required properties so we could create, update, get a list of all, get specified details of one, or delete an instance from said models using views and encoders.

urls.py
- Contains code that creates the URLs that allow the views from the views.py file to send "POST", "GET", "PUT, and "DELETE" requests.

views.py
- Contains list and detail functions that
