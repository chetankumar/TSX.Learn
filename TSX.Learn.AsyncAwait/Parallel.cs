using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace TSX.Learn.AsyncAwait
{
	class ParallelExample
	{
		public void Run()
		{
			Stopwatch watch = new Stopwatch();
			watch.Start();
			var list = Enumerable.Range(1, 20);
			List<string> output = new List<string>();
			Parallel.ForEach(list,  x =>
			{
				 var i = 1;
				 SafeAdd(output,$"{watch.ElapsedMilliseconds},{x},{i++}");
				 SafeAdd(output,$"{watch.ElapsedMilliseconds},{x},{i++}");
				 SafeAdd(output,$"{watch.ElapsedMilliseconds},{x},{i++}");
				 SafeAdd(output, $"{watch.ElapsedMilliseconds},{x},{i++}");
				 Thread.Sleep(200);
				 SafeAdd(output,$"{watch.ElapsedMilliseconds},{x},{i++}");
				 SafeAdd(output,$"{watch.ElapsedMilliseconds},{x},{i++}");
				 SafeAdd(output,$"{watch.ElapsedMilliseconds},{x},{i++}");
				 SafeAdd(output, $"{watch.ElapsedMilliseconds},{x},{i++}"); 
			});
			File.WriteAllText("Parallel.csv", string.Join('\n', output));
		}

		private void SafeAdd(List<string> output, string v)
		{
			lock (output)
			{
				output.Add(v);
			}
		}
	}


}
