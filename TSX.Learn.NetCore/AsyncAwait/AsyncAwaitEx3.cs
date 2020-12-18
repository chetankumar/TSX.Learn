using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TSX.Learn.NetCore
{
    public class AsyncAwaitEx3
    {
        private Random Random = new Random(DateTime.UtcNow.Millisecond);

        public async void Run()
        {
            Console.WriteLine("Starting Run");

            for(int i = 1; i < 10; i++)
            {
                PrintMessage(i+"-m1");
                string m2 = await ReturnMessage(i+"-m2");
                Console.WriteLine("The message is " + m2);
            }

            Console.WriteLine("Run Completed!");
        }

        public async void PrintMessage(string message)
        {
            await Task.Delay((int)(Random.NextDouble()*4000));
            Console.WriteLine("The message is " + message);
        }

        public async Task<string> ReturnMessage(string message)
        {
            await Task.Delay((int)(Random.NextDouble() * 4000));
            return message;
        }
    }
}
