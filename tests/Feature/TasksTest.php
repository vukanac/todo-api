<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\FreshDatabase;

class TasksTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCreateNewTask()
    {
        $response = $this->json('POST', '/api/tasks', ['title' => 'New Task', 'completed' => 1]);

        $response
            ->assertStatus(200)
            ->assertJson([
                'completed' => 1,
                'title' => 'New Task',
            ]);
    }
}
