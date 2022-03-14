Initialization:

Install package-lock.json- "npm i"
________

Make sure you have postgres installed and a database created, then run the following command in a separate terminal (update "yourDatabaseName" to whatever you call your database)
"psql -d yourDatabaseName -a -f schema.sql"

Once the command is successfully ran, go into the ETL.sql file and update the filepaths for the CSV files to match the location on your machine then run the following command
"psql -d yourDatabaseName -a -f ETL.sql"

________

After this your database should be properly formatted and populated.
You can now run "npm start" to get your server running and use it.