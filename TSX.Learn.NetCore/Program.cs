using System;

namespace TSX.Learn.NetCore
{
    class Program
    {
        static void Main(string[] args)
        {
            string taskName = args[0];
            switch (taskName)
            {
                case "AsyncAwaitEx1":
                    new AsyncAwaitEx1().Run();
                    break;
                case "AsyncAwaitEx2":
                    new AsyncAwaitEx2().Run();
                    break;
                case "AsyncAwaitEx3":
                    new AsyncAwaitEx3().Run();
                    break;
                case "AsyncAwaitEx4":
                    new AsyncAwaitEx4().Run();
                    break;
            }
            Console.WriteLine("Finished!");
            Console.Read();
        }
    }
}
