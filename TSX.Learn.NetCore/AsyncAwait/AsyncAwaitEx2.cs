using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TSX.Learn.NetCore
{
    public class AsyncAwaitEx2
    {
        public async void Run()
        {
            Console.WriteLine("Starting Run");
            await PrintMessage("t1", 5000);
            await PrintMessage("t2", 8000);
            await PrintMessage("t3", 11000);
            Console.WriteLine("Run Completed!");
        }

        public async Task PrintMessage(string message, int delay)
        {
            await Task.Delay(delay);
            Console.WriteLine("Printing Message: " + message);
        }
    }
}
