# CarCar

Team:

* Person 2 - Bradley Daniels - Sales
* Person 1 - Braden Towns - Service

## Design

React Front-End / Django Back-End / PostgreSQL

## Service microservice

- Created an AutomobileVO, Technician and Appointment model so that I could use the properties on each in order to populate a react front end.
- The user should be able to use dynamic forms and lists on the website to manage their car dealership.


## Sales microservice

models.py
- Created an `AutomobileVO` and used poller to be able to communicate to the Inventory Microservice.
- Created three other models, `Salesperson`, `PotentialCustomer`, and `SalesRecord` with required properties so we could create, update, get a list of all, get specified details of one, or delete an instance from said models using views and encoders.

urls.py
- Contains code that creates the URLs that allow the views from the views.py file to send "POST", "GET", "PUT, and "DELETE" requests.

views.py
- Contains list and detail functions that
