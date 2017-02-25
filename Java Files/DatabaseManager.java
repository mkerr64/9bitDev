import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DatabaseManager {
	Connection c = null;
	Statement statement = null;
	public DatabaseManager(){
		try{
			Class.forName("com.mysql.jdbc.Driver");
		}
		catch (ClassNotFoundException e) {
			System.err.println( e.getClass().getName() + ": " + e.getMessage() );
		}
		
	}
	
	//Inserts a transaction into the database
	public void insert_transaction(Integer id, float amount, String category){
		try{
			//Opens a connection to the database file
			c = DriverManager.getConnection("jdbc:sqlite:user_data.db");
			c.setAutoCommit(false);
			
			//Queries the SQL statement
			statement = c.createStatement();
			statement.executeUpdate("INSERT INTO Transactions (Id,Amount,Category) VALUES ("+id+", "+amount+", '"+category+"');");
			
			//Commits the changes and closes the database connection
			statement.close();
			c.commit();
			c.close();
		}
		catch(SQLException e){
			System.err.println( e.getClass().getName() + ": " + e.getMessage() );
		}
	}
	
	//Inserts an account into the database
	public void insert_account(String user, String password){
		try{
			//Opens a connection to the database file
			c = DriverManager.getConnection("jdbc:sqlite:user_data.db");
			c.setAutoCommit(false);
			
			//Queries the SQL statement
			statement = c.createStatement();
			statement.executeUpdate("INSERT INTO Transactions (Username, Password) VALUES ('"+user+"', '"+password+"');");
			
			//Commits the changes and closes the database connection
			statement.close();
			c.commit();
			c.close();
		}
		catch(SQLException e){
			System.err.println( e.getClass().getName() + ": " + e.getMessage() );
		}
	}
	
	//Returns a list of all the transaction associated with a user's ID
	public void/*List<Transaction>*/ getTransactions(int id){
		//List<Transaction> transaction_list = new ArrayList<Transaction>();
		try{
			//Opens a connection to the database file
			c = DriverManager.getConnection("jdbc:sqlite:user_data.db");
			c.setAutoCommit(false);
			
			//Queries the SQL statement
			statement = c.createStatement();
			ResultSet results = statement.executeQuery("SELECT * FROM Transactions WHERE Id="+id+" ORDER BY Year DESC, Month DESC, Day DESC;");
			while(results.next()){
				float amount = results.getFloat("Amount");
				String category = results.getString("Category");
				int year = results.getInt("Year");
				int month = results.getInt("Month");
				int day = results.getInt("Day");
				String date = Integer.toString(month)+"/"+Integer.toString(day)+"/"+Integer.toString(year);
				//Transaction new_trans = new Transaction(amount, category, date);
				//transaction_list.add(new_trans);
			}
			
			//Commits the changes and closes the database connection
			results.close();
			statement.close();
			c.commit();
			c.close();
		}
		catch(SQLException e){
			System.err.println( e.getClass().getName() + ": " + e.getMessage() );
		}
	}
	
}
