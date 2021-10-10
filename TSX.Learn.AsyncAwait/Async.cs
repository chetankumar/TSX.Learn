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
	class AsyncExample
	{
		public void Run()
		{
			Stopwatch watch = new Stopwatch();
			watch.Start();
			var list = Enumerable.Range(1, 20);
			var taskList = new List<Task>();
			List<string> output = new List<string>();
			foreach (int x in list)
			{
				var t = Run(watch,output, x);
				taskList.Add(t);
			}
			Task.WaitAll(taskList.ToArray());
			File.WriteAllText("Asyc.csv", string.Join('\n', output));
		}

		public async Task Run(Stopwatch watch,List<string> output,int x)
		{
			var i = 1;
			SafeAdd(output, $"{watch.ElapsedMilliseconds},{x},{i++}");
			SafeAdd(output, $"{watch.ElapsedMilliseconds},{x},{i++}");
			SafeAdd(output, $"{watch.ElapsedMilliseconds},{x},{i++}");
			SafeAdd(output, $"{watch.ElapsedMilliseconds},{x},{i++}");
			await Wait(200);
			SafeAdd(output, $"{watch.ElapsedMilliseconds},{x},{i++}");
			SafeAdd(output, $"{watch.ElapsedMilliseconds},{x},{i++}");
			SafeAdd(output, $"{watch.ElapsedMilliseconds},{x},{i++}");
			SafeAdd(output, $"{watch.ElapsedMilliseconds},{x},{i++}");
		}

		private void SafeAdd(List<string> output, string v)
		{
			lock (output)
			{
				output.Add(v);
			}
		}

		public async Task Wait(int millis)
		{
			await Task.Delay(millis);
		}
	}


}
