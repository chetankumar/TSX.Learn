using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharp9
{
	public class InitProps
	{
		public void TestInfoClass()
		{
			InfoClass obj = new InfoClass
			{
				Id = 1,
				Name = "Chetan"
			};
			obj.Id = 2;
			obj.Name = "Bharat";


			//InfoClass2 obj2 = new InfoClass2
			//{
			//	Id = 1,
			//	Name = "Chetan"
			//};
			//obj2.Id = 2;
			//obj2.Name = "Bharat";

			//InfoClass3 obj3 = new InfoClass3
			//{
			//	Id = 1,
			//	Name = "Chetan"
			//};
			//obj3.Id = 2;
			//obj3.Name = "Bharat";

		}
	}

	public class InfoClass
	{
		public int Id { get; set; }
		public string Name { get; set; }
	}

	public class InfoClass2
	{
		public InfoClass2(int id, string name)
		{
			this.Id = id;
			this.Name = name;
		}

		public int Id { get;  }
		public string Name { get; }
	}

	public class InfoClass3
	{
		public InfoClass3(int id, string name)
		{
			this.Id = id;
			this.Name = name;
		}

		public int Id { get; init; }
		public string Name { get; init; }
	}
}
