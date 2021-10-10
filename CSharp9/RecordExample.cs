using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharp9
{

	public class UsingRecords
	{
		public void TestRecords()
		{
			var chetan = new RecordExample
			{
				FirstName = "Chetan",
				LastName = "Kumar"
			};

			var bharat = chetan with { FirstName = "Bharat" };

			var puneet = new RecordExample("Puneet", "Singhal");
		}
	}

	public record RecordExample
	{
		public string? FirstName { get; init; }
		public string? LastName { get; init; }

		public RecordExample(string firstName, string lastName) => (FirstName, LastName) = (firstName, lastName);
	}
}
