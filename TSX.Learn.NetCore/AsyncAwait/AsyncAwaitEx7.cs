using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace TSX.Learn.NetCore
{

    // Why not use Parallel.Foreach ???
    public class AsyncAwaitEx7
    {
        private Stopwatch watch = new Stopwatch();

        public async Task Run()
        {
            watch.Start();
            List<string> messagesToPrint = GetMessageList(length: 200);
            List<Task> printTasks = new List<Task>();
            foreach (var x in messagesToPrint)
            {
                printTasks.Add(PrintMessage(x));
            }
            Task.WaitAll(printTasks.ToArray());
        }


        public async Task PrintMessage(string message, int delay = 2000)
        {
            await Task.Delay(delay);
            Console.WriteLine("Printing Message: " + message + "-- in "+ watch.ElapsedMilliseconds + " milliseconds");
        }

        private List<string> GetMessageList(int length)
        {
            List<string> messageList = new List<string>();
            new List<string>();
            for (int i = 0; i < length; i++)
            {
                messageList.Add("Message #" + i);
            }
            return messageList;
        }
    }
}

